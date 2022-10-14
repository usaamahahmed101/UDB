### Environment Configuration
service_account = "devops-admin@devops-361723.iam.gserviceaccount.com"
rgn             = "us-central1"
env             = "test"
env_owner       = "devops"
default_zone    = "us-central1-a"

### Bucket Module Configuration
default_bucket   = "general-udbusa"
default_location = "us-central1"

### Bastion Host Configuration
admin_user = "admin"

### Database Configuration
db_logfile_path   = "/log/mongodb.log"
db_datafiles_path = "/data"
pid_file          = "/var/config/mongod.pid"
replica_name      = "rs0"
replica_stat      = false 
port              = "27018"