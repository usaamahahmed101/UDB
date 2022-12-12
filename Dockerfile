FROM centos:7
RUN yum install gcc openssl-devel bzip2-devel libffi-devel zlib-devel -y
RUN curl https://www.python.org/ftp/python/3.7.9/Python-3.7.9.tgz --output /tmp/Python-3.7.9.tgz
WORKDIR /tmp
RUN tar -xvzf Python-3.7.9.tgz
WORKDIR /tmp/Python-3.7.9
RUN ./configure --enable-optimizations
RUN yum install make -y
RUN make altinstall
RUN yum install which -y
WORKDIR /tmp
RUN rm -r Python-3.7.9.tgz
RUN yum -y install epel-release
RUN curl https://bootstrap.pypa.io/get-pip.py --output get-pip.py
RUN python3.7 get-pip.py
RUN python3.7 -m pip install --upgrade pip
RUN python3.7 -m pip install gcloud
RUN yum install -y vim
WORKDIR /app
ENV PYTHONPATH "${PYTHONPATH}"
COPY infrastructure/common_scripts/* /app/.
RUN chmod +rwx * 
CMD ["/bin/bash"]