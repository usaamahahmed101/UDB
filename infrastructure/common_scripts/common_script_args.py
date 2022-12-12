import argparse

def common_args():
    parser = argparse.ArgumentParser()
    parser.add_argument('--credential_file', 
                        help='Credential file for the UDB GCP Service Account'),
    parser.add_argument('--project_id', 
                        help='Project ID for GCP'),
    parser.add_argument('--bucket_name', 
                        help='GCS Bucket')                    
    return parser.parse_args()
