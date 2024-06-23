# health check
resource "google_compute_region_health_check" "default" {
  name     = "l7-lb-hc"
  http_health_check {
    port = 80
  }
}