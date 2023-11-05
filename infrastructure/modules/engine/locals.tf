locals {
  timestamp            = timestamp()
  date_format          = formatdate("DD_MM_YY", local.timestamp)
  service_account      = var.service_account
  complete_environment = "${var.env}-${var.env_owner}"

  instance_name   = "${var.engine_type}-${local.complete_environment}-engine-instance"
  mig_name        = "${var.engine_type}-${local.complete_environment}-engine-mig"
  autoscaler_name = "${var.engine_type}-${local.complete_environment}-engine-autoscaler"
  max_nodes       = var.max_nodes
  min_nodes       = var.min_nodes
  rgn             = var.rgn
  zones           = ["us-central1-a", "us-central1-b", "us-central1-c"]

  templates = {
    web_server_installation = templatefile("${path.module}/templates/web-engine.sh.tftpl", { interal_lb_address = var.interal_lb_address })
    api_server_installation = templatefile("${path.module}/templates/api-engine.sh.tftpl", { artifact = var.artifact })
  }

}