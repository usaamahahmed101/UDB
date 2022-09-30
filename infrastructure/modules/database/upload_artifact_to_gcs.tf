resource "google_storage_bucket_object" "upload_mongodconfig" {
  source = "${path.module}/temp/mongo_configuration_artifact_${local.date_format}.zip"
  bucket = var.default_bucket
  name   = "database/artifacts/mongo_configuration_artifact_${local.date_format}.zip"
  depends_on = [
    data.archive_file.mongo_configuration_artifact
  ]
}
