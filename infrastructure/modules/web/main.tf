resource "google_compute_region_autoscaler" "web-autoscaler" {
  name   = local.autoscaler_name
  region   = local.rgn
  target = google_compute_region_instance_group_manager.web_instance_group_manager.id

  autoscaling_policy {
    max_replicas    = local.max_nodes
    min_replicas    = local.min_nodes
    cooldown_period = 60

  }
}

resource "google_compute_region_instance_group_manager" "web_instance_group_manager" {
  name = local.mig_name
  region = local.rgn
  distribution_policy_zones  = local.zones

  version {
    instance_template = google_compute_instance_template.web_nodes_template.id
    name              = "primary"
  }

  base_instance_name = local.instance_name

auto_healing_policies {
    health_check      = google_compute_health_check.default.self_link
    initial_delay_sec = 300
  }

    named_port {
    name = "tcp"
    port = 80
    }


}
