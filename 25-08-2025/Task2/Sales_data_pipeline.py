import os
import pandas as pd
from azure.storage.blob import BlobServiceClient


ACCOUNT_NAME = os.getenv("AZURE_STORAGE_ACCOUNT_NAME")
ACCOUNT_KEY = os.getenv("AZURE_STORAGE_ACCOUNT_KEY")
CONTAINER_NAME = os.getenv("AZURE_CONTAINER_NAME")

def get_blob_service_client():
    connect_str = f"DefaultEndpointsProtocol=https;AccountName={ACCOUNT_NAME};AccountKey={ACCOUNT_KEY};EndpointSuffix=core.windows.net"
    return BlobServiceClient.from_connection_string(connect_str)

def upload_to_blob(file_path, blob_name):
    try:
        blob_service_client = get_blob_service_client()
        blob_client = blob_service_client.get_blob_client(container=CONTAINER_NAME, blob=blob_name)
        with open(file_path, "rb") as data:
            blob_client.upload_blob(data, overwrite=True)
        print(f" Uploaded {blob_name} to Azure Blob Storage")
    except Exception as e:
        print(f" Upload failed for {blob_name}: {e}")

def main():
  
    input_file = "data/sales_data.csv"
    df = pd.read_csv(input_file)


    df = df.drop_duplicates(subset=["order_id"])

    df["region"] = df["region"].fillna("Unknown")
    df["revenue"] = df["revenue"].fillna(0)
    df["cost"] = df["cost"].fillna(0)

    df["profit_margin"] = df.apply(
        lambda x: (x["revenue"] - x["cost"]) / x["revenue"] if x["revenue"] != 0 else 0,
        axis=1
    )

  
    def categorize_customer(revenue):
        if revenue > 100000:
            return "Platinum"
        elif 50000 < revenue <= 100000:
            return "Gold"
        else:
            return "Standard"
    df["customer_segment"] = df["revenue"].apply(categorize_customer)


    raw_output = "raw_sales_data.csv"
    processed_output = "processed_sales_data.csv"

    pd.read_csv(input_file).to_csv(raw_output, index=False)   # unchanged copy
    df.to_csv(processed_output, index=False)

    print(" Data processing complete. Files saved locally.")


    upload_to_blob(raw_output, raw_output)
    upload_to_blob(processed_output, processed_output)

if __name__ == "__main__":
    main()
