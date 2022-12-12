import logging

def get_logger():
    logging.basicConfig(filename='/tmp/container_logs/disk_space.log',
                        format='%(asctime)s - %(levelname)s - %(message)s',
                        filemode='a')

    logger = logging.getLogger()
    logger.setLevel(logging.DEBUG)
    return logger
    
logger = get_logger()




