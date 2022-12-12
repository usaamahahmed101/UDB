resource "google_storage_bucket" "bucket_creation" {
  name          = var.default_bucket
  location      = var.default_bucket_location
  force_destroy = var.forceful_destruction
}

