#!/bin/bash
source ~/.bash_profile
dirNum=$(ls -l |grep "^d"|wc -l)
echo $dirNum
if [[ "$dirNum"<7 ]]; then
	day=$(date "+%Y%m%d")
	if [ ! -d "$day" ]; then
 		mkdir -p $day
 	fi
	time=$(date "+%Y%m%d%H")
	work_path=$(dirname $(readlink -f $0))
	fileName=$work_path"/"$day"/"$time".pcap"
	echo $fileName
	tshark -a duration:30 -w $fileName -F pcap -f 'port 53'
fi
