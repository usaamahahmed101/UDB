# reserved IP address
resource "google_compute_global_address" "default" {
  count = (var.engine_type == "web")  ? 1 : 0
  name = "l7-xlb-static-ip"
}


# forwarding rule
resource "google_compute_global_forwarding_rule" "default" {
  count = (var.engine_type == "web")  ? 1 : 0
  name                  = "l7-xlb-forwarding-rule"
  ip_protocol           = "TCP"
  load_balancing_scheme = "EXTERNAL"
  port_range            = "80"
  target                = google_compute_target_http_proxy.default[0].id
  ip_address            = google_compute_global_address.default[0].id
}

# http proxy
resource "google_compute_target_http_proxy" "default" {
  count = (var.engine_type == "web")  ? 1 : 0
  name     = "l7-xlb-target-http-proxy"
  url_map  = google_compute_url_map.default[0].id
}

# url map
resource "google_compute_url_map" "default" {
  count = (var.engine_type == "web")  ? 1 : 0
  name            = "l7-xlb-url-map"
  default_service = google_compute_backend_service.default[0].id
}

# backend service with custom request and response headers
resource "google_compute_backend_service" "default" {
  count = (var.engine_type == "web") ? 1 : 0
  name                     = "l7-xlb-backend-service"
  protocol                 = "HTTP"
  port_name                = "tcp"
  load_balancing_scheme    = "EXTERNAL"
  timeout_sec              = 10
  enable_cdn               = true
  health_checks            = [google_compute_health_check.default[0].id]
  backend {
    group           = google_compute_region_instance_group_manager.engine_instance_group_manager[0].instance_group
    balancing_mode  = "UTILIZATION"
    capacity_scaler = 1.0
  }
}

