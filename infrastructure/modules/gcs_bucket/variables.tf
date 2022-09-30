variable "default_bucket" {
  type = string
}

variable "default_bucket_location" {
  type = string
}

variable "storage_class" {
  type    = string
  default = "STANDARD"
}

variable "forceful_destruction" {
  type    = bool
  default = true
}

