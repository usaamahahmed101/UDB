locals {

  timestamp            = timestamp()
  date_format          = formatdate("DD_MM_YY", local.timestamp)
  service_account      = var.service_account
  complete_environment = "${var.env}-${var.env_owner}"

  instance_name = "${local.complete_environment}-app-instance"
  mig_name = "${local.complete_environment}-app-mig"
  autoscaler_name = "${local.complete_environment}-app-autoscaler"
  max_nodes  = var.max_nodes
  min_nodes = var.min_nodes
  rgn = var.rgn
  zones = ["us-central1-a", "us-central1-b","us-central1-c"]

}