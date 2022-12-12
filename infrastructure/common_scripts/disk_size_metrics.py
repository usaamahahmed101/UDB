import shutil
from udb_logging import logger

def main():
    file_system_size('/data')

def file_system_size(file_system):
    total, used, free = shutil.disk_usage(file_system)
    logger.info(f"Total Disk Space: {total/1024/1024/1024}")
    logger.info(f"Used Disk Usage %: {(used/total)*100}")
    logger.info(f"Free Disk %: {(free/total)*100}")

if __name__ == "__main__":
    main()

