# health check
resource "google_compute_health_check" "default" {
  count = (var.engine_type == "web")  ? 1 : 0
  name     = "${var.engine_type}-l7-xlb-hc"
  timeout_sec         = 30
  check_interval_sec  = 60
  healthy_threshold   = 2
  unhealthy_threshold = 10
  http_health_check {
    port = 80
  }
}

# health check
resource "google_compute_region_health_check" "default" {
  count = ( var.engine_type == "api")  ? 1 : 0
  name     = "${var.engine_type}-l7-xlb-hc"
  timeout_sec         = 30
  check_interval_sec  = 60
  healthy_threshold   = 2
  unhealthy_threshold = 10
  tcp_health_check {
    port = 5000
  }
}