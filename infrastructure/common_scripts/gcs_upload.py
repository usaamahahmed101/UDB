import argparse
from gcloud import storage

def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument('--source_file'),
                        #description='Full Path of the file to upload to gcs'),   
    parser.add_argument('--bucket_name')
                        #description='GCS Bucket'), 
    parser.add_argument('--key')
                        #description='GCS Bucket'),                                                                   
    return parser.parse_args()

def main():
    args = parse_args()
    gcs_storage_client = storage.Client()
    upload_artifact(gcs_storage_client,args.bucket_name, args.source_file, args.key)

def upload_artifact(gs_storage_client, bucket_name, source_file, key):
    bucket_status = checking_bucket_status(gs_storage_client,bucket_name)
    try:
        bucket = gs_storage_client.get_bucket(bucket_name)
        blob = bucket.blob(key)
        blob.upload_from_filename(source_file)
    except Exception as error:
        print (f"There is an error uploading {source_file} to the {bucket_name}: {error}")
        raise

def checking_bucket_status(gs_storage_client, bucket_name):
    try:
        bucket_status = gs_storage_client.get_bucket(bucket_name)
        print(f"Bucket {bucket_status} exists!")
    except:
        print(f"Bucket {bucket_name} does not exist! Create bucket before proceeding :)")
        create_bucket = gs_storage_client.create_bucket(bucket_name)
        print(f"Bucket {bucket_name} has been created!")
        pass

if __name__ == "__main__":
    main()