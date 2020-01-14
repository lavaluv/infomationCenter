#!/bin/bash
source /etc/profile
work_path=$(dirname $(readlink -f $0))
dirNum=$(ls -l $work_path|grep "^d"|wc -l)
if [ "$dirNum" -lt 7 ]; 
then
	day=$(date "+%Y%m%d")
	dirName=$work_path"/"$day
	if [ ! -d "$dirName" ]; then
 		mkdir -p $dirName
		sudo chmod 777 -R $dirName
 	fi
	time=$(date "+%Y%m%d%H%M")
	fileName=$dirName"/"$time".pcap"
	tempName=$dirName"/"$time"_temp.pcap"
	echo $fileName
	sudo tshark -a duration:3600 -w $tempName -F pcap -f 'port 53'
	sudo chmod 777 $tempName
	sudo mv $tempName $fileName
else
	rmFileName=$(ls $work_path|head -1)
	sudo rm -rf $rmFileName
fi
