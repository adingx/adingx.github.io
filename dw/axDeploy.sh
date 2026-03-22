#!/bin/bash

# v1.8 202009 tmux.conf/vimrc sync for support ubuntu 20.04; 
# v1.7 202008 axDeploy.sh flexible support to different ubuntu distro(1804/2004), user-mode ;
# v1.6 202005 axDeploy.sh support on centos 
# v1.5 202003 upgrade axTools to 202003(math.html)
# v1.4 202001 add openjdk8-headless and openjre8-headless
# v1.3 202001 upgrade nodejs 10.x to 12.x 
# v1.2 201910 add nodejs updating to the latest version.
# v1.1 201904 add cscope and building guide.
# v1.0 201903 created.

# Quick Deploy
# curl -s "https://gitee.com/explorer_ading/explorer_ading/raw/master/dw/axDeploy.sh" | bash

# curl -s "https://www.adingx.com/dw/axDeploy.sh" | bash
# curl -s -O "https://www.adingx.com/dw/axDeploy.sh" ; bash ./axDeploy.sh usermode ; rm ./axDeploy.sh 

# Make AXTools package
# adx_pkg_backup  , and then update the variable AXTools in this shell script .

VERSION=1.8
AXTools=axTools202009
CFGFile=~/.bashrc

USERMODE=FALSE
if [ $# -ge 1 ]
then
	USERMODE=TRUE
fi

# Colorful Text Output in Bash Shell
# https://stackoverflow.com/questions/5947742/how-to-change-the-output-color-of-echo-in-linux

RED='\033[1;31m'; BLUE='\033[1;34m'; GREEN='\033[1;32m';  PURPLE='\033[1;35m'; CYAN='\033[1;36m'; DEFAULTC='\033[0m'
printf "\nWelcome to the ${RED}axDeploy${DEFAULTC} installer\n\n"

show_heading(){
    # echo -e "${GREEN} $1 ${DEFAULTC}"
    printf "\n${GREEN} $1 ${DEFAULTC}\n\n"
}

show_info(){
    # printf "\n${RED} $1 ${DEFAULTC}\n"
    # printf "\n${BLUE} $1 ${DEFAULTC}\n\n"
    printf "\n${CYAN} $1 ${DEFAULTC}\n\n"
    # printf "\n${PURPLE} $1 ${DEFAULTC}\n\n"
}

show_heading "Starting AUTO-DEPLOY(version: ${VERSION}) powered by adingx..."

setup_for_ubuntu() {
    sudo apt-get update
    sudo apt-get -y install vim tmux git p7zip-full exuberant-ctags tree cscope clang curl jq w3m
    show_info "Ubuntu EDIT Tools setup finished."

    sudo apt-get -y install build-essential
    show_info "Ubuntu DEVELOP Tools setup finished."

	# Getting the version of Ubuntu
	VEROF_UBUNTU=`cat /etc/issue | cut -d ' ' -f 2`
	show_info "Ubuntu VERSION: $VEROF_UBUNTU"


	if [ "${VEROF_UBUNTU:0:5}" = "18.04" ]; then
		# nodejs setup to the lastest version
		# https://websiteforstudents.com/install-the-latest-node-js-and-nmp-packages-on-ubuntu-16-04-18-04-lts/
		# https://github.com/nodesource/distributions
		curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
		sudo apt install nodejs
		show_info "Nodejs setup finished."

		# openjdk-8 
		sudo apt install -y openjdk-8-jre-headless
		sudo apt install -y openjdk-8-jdk-headless

	else:
		show_info "For Ubuntu 20.04 Install."
	fi 

    # TimeZone - HongKong
    sudo timedatectl set-timezone Asia/Hong_Kong
}

setup_for_redhat() {
    sudo yum update -y 
    sudo yum install -y tmux p7zip.x86_64 git tree ctags cscope jq 
    show_info "CentOS EDIT Tools setup finished."

    sudo yum install -y gcc gcc-c++ automake libtool
    show_info "CentOS DEVELOP Tools setup finished."
}

if [ $USERMODE = "TRUE" ]; then
	printf "\nIt's currently running ${RED}USER MODE${DEFAULTC} - no system packages will be installed\n\n"

else
	# Ubuntu Distro
	if [ -f /etc/lsb-release ]; then
		setup_for_ubuntu 
	fi
	# Debian Distro
	if [ -f /etc/os-release ]; then
		setup_for_ubuntu 
	fi
	# CentOS Distro
	if [ -f /etc/redhat-release ]; then
		setup_for_redhat
	fi
fi 

# wget https://www.adingx.com/dw/$AXTools.7z
# wget https://gitee.com/explorer_ading/explorer_ading/raw/master/dw/$AXTools.7z
wget https://adingx.github.io/dw/$AXTools.7z

show_info "AX Tools downloaded."

7za x $AXTools.7z
cp -rfv $AXTools/. ~/
mkdir ~/.vimbak
rm -rf $AXTools*
show_info "AX Tools deployed."

echo "" >> $CFGFile
echo "ADX_PATH=~/.adx_toolbox/bin/" >> $CFGFile
echo "export PATH=\$ADX_PATH:\$PATH" >> $CFGFile
echo "alias gits='git status'"  >> $CFGFile
echo "alias gita='git add --all'" >> $CFGFile
echo "alias gitci='git commit -a -m'" >> $CFGFile
echo "alias gitrs='git checkout . && git clean -df'" >> $CFGFile
show_info "AX Tools Setting Up."

show_heading "AUTO-DEPLOY finished."

