from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.operators.bash import BashOperator
from datetime import datetime
import logging


# Task Functions

def extract_data(**kwargs):
    """Simulate data extraction"""
    data = "raw_data: 10,20,30,40,50"
    logging.info(f"Extracted Data: {data}")

    # Store data in XCom for next task
    kwargs['ti'].xcom_push(key='extracted_data', value=data)


def transform_data(**kwargs):
    """Transform extracted data (e.g., convert string to numbers, sum them)"""
    ti = kwargs['ti']
    raw_data = ti.xcom_pull(key='extracted_data', task_ids='extract_task')

    logging.info(f"Raw data received for transformation: {raw_data}")
    numbers = list(map(int, raw_data.replace("raw_data:", "").split(",")))
    transformed_data = sum(numbers)
    logging.info(f"Transformed Data (sum): {transformed_data}")

    # Push transformed result for next task
    ti.xcom_push(key='transformed_data', value=transformed_data)


def load_data(**kwargs):
    """Final load simulation (printing/logging result)"""
    ti = kwargs['ti']
    result = ti.xcom_pull(key='transformed_data', task_ids='transform_task')
    logging.info(f"Final Data Loaded: {result}")


# Default Arguments
default_args = {
    'owner': 'airflow',
    'start_date': datetime(2024, 1, 1),
    'retries': 1,
}

# DAG Definition

with DAG(
        dag_id="etl_pipeline_assignment",
        default_args=default_args,
        schedule_interval=None,
        catchup=False,
        tags=['assignment', 'etl'],
) as dag:
    # Extract
    extract_task = PythonOperator(
        task_id='extract_task',
        python_callable=extract_data,
        provide_context=True,
    )

    # Transform
    transform_task = PythonOperator(
        task_id='transform_task',
        python_callable=transform_data,
        provide_context=True,
    )

    # Load (Bash command + Python)
    load_bash = BashOperator(
        task_id='load_bash',
        bash_command='echo "Loading data into target system..."'
    )

    load_task = PythonOperator(
        task_id='load_task',
        python_callable=load_data,
        provide_context=True,
    )

    # Task chaining
    extract_task >> transform_task >> load_bash >> load_task
