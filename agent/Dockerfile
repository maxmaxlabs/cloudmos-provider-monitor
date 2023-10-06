FROM ubuntu:trusty

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update
RUN apt-get -y install build-essential wget unzip perl perl-base perl-modules libsdl-perl libperl-dev libpcre3-dev mesa-utils zlib1g-dev libpng-dev sqlite php5-cli php5-gd php5-json
RUN cd /tmp
RUN wget http://phoronix-test-suite.com/releases/repo/pts.debian/files/phoronix-test-suite_6.2.1_all.deb
RUN dpkg -i phoronix-test-suite_6.2.1_all.deb
RUN rm -f phoronix-test-suite_6.2.1_all.deb

ADD run.sh /run.sh
RUN chmod a+x /run.sh
ENTRYPOINT /run.sh