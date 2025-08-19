from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.operators.bash import BashOperator
from datetime import datetime, timedelta
import json
import random


# Default args
default_args = {
    'owner': 'data_team',
    'depends_on_past': False,
    'email': ['audit-alerts@example.com'],
    'email_on_failure': True,
    'email_on_retry': False,
    'retries': 2,
    'retry_delay': timedelta(minutes=5),
}

# Python task functions

# 1. Data pull simulation
def pull_data(**context):
    # Simulate fetching from API/DB
    dummy_data = {
        "record_id": 101,
        "timestamp": datetime.now().isoformat(),
        "value": random.randint(1, 200)  # random value between 1-200
    }
    context['ti'].xcom_push(key="raw_data", value=dummy_data)

# 2. Audit rule validation
def validate_data(**context):
    data = context['ti'].xcom_pull(key="raw_data", task_ids="pull_data")
    threshold = 100
    result = {
        "record_id": data["record_id"],
        "value": data["value"],
        "is_valid": data["value"] <= threshold,
        "checked_at": datetime.now().isoformat()
    }

    # Store result in file
    with open("/tmp/audit_result.json", "w") as f:
        json.dump(result, f)

    if not result["is_valid"]:
        raise ValueError(f"Audit failed! Value {data['value']} exceeded threshold {threshold}")

# 3. Log audit result
def log_audit_result():
    with open("/tmp/audit_result.json", "r") as f:
        result = json.load(f)

    if result["is_valid"]:
        print(f"[AUDIT SUCCESS] Record {result['record_id']} passed validation with value {result['value']}")
    else:
        print(f"[AUDIT FAILURE] Record {result['record_id']} failed validation with value {result['value']}")


# DAG Definition

with DAG(
    dag_id='data_audit_dag',
    default_args=default_args,
    description='Scheduled Data Audit Simulation DAG',
    schedule_interval='@hourly',
    start_date=datetime(2025, 1, 1),
    catchup=False,
    tags=['audit', 'validation'],
) as dag:

    # Task 1: Data Pull
    t1 = PythonOperator(
        task_id="pull_data",
        python_callable=pull_data,
        provide_context=True,
    )

    # Task 2: Validation
    t2 = PythonOperator(
        task_id="validate_data",
        python_callable=validate_data,
        provide_context=True,
    )

    # Task 3: Log Results
    t3 = PythonOperator(
        task_id="log_audit_result",
        python_callable=log_audit_result,
    )

    # Task 4: Final Status Update (BashOperator)
    t4 = BashOperator(
        task_id="final_status_update",
        bash_command='echo "Audit flow completed at $(date)" >> /tmp/audit_status.log'
    )

    # DAG flow
    t1 >> t2 >> t3 >> t4
