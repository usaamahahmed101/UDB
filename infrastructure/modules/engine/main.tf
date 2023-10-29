resource "google_compute_region_autoscaler" "engine-autoscaler" {
  count = (var.engine_type == "web" || var.engine_type == "api")  ? 1 : 0
  name   = "${var.engine_type}-${local.autoscaler_name}"
  region   = local.rgn
  target = google_compute_region_instance_group_manager.engine_instance_group_manager[0].id

  autoscaling_policy {
    max_replicas    = local.max_nodes
    min_replicas    = local.min_nodes
    cooldown_period = 60

  }
}

resource "google_compute_region_instance_group_manager" "engine_instance_group_manager" {
  count = (var.engine_type == "web" || var.engine_type == "api")  ? 1 : 0
  name = "${var.engine_type}-${local.mig_name}"
  region = local.rgn
  distribution_policy_zones  = local.zones

  version {
    instance_template = google_compute_instance_template.engine_nodes_template.id
    name              = "primary"
  }

  base_instance_name = local.instance_name


    named_port {
    name =  "http"
    port = 80
    }

  named_port {
    name =  "tcp"
    port = 5000
    }

}
