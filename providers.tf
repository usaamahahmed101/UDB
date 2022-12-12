terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = ">= 4.35.0"
    }
  }
  required_version = "~> 1.2.8"
}

terraform {
  backend "gcs" {
    bucket = "udb_tfstate_backup"
    prefix = "terraform/state"
  }
}

provider "google" {
  project = "devops-361723"
  region = "us-central1"
}