from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime
import os

def read_file():
    path = '/tmp/date.txt'
    if os.path.exists(path):
        with open(path,'r') as f:
            print("Read from file:",f.read())
    else:
        raise FileNotFoundError("File not found.Please run Producer DAG first.")

with DAG(
    dag_id='consumer_dag',
    start_date=datetime(2023,1,1),
    schedule_interval=None,
    catchup=False,
    tags=['example']
) as dag:

    read_task = PythonOperator(
        task_id = 'read_file_task',
        python_callable=read_file
    )
