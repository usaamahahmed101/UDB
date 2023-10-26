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

auto_healing_policies {
  health_check      = (var.engine_type == "web") ? google_compute_health_check.default[0].self_link :  google_compute_region_health_check.default[0].self_link
 # health_check      = google_compute_health_check.default[0].self_link 
  initial_delay_sec = 300
  }

    named_port {
    name = "tcp"
    port = 80
    }


}
