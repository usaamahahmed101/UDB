locals {
  timestamp   = timestamp()
  date_format = formatdate("DD_MM_YY", local.timestamp)
}
