#!/bin/bash

count=0
genpath=''

locations=("Animal_Room" "Animal_Room/.Lions_Den" "Ringmasters_Quaters" "Animal_Room/Monkey_Arena/.Monkeys_Secret_Cave/.Path_1")

animals=(Elephant.rtf .Monkey_2.rtf Monkey_3.rtf Monkey_4.rtf Monkey.rtf Bird_1.rtf Bird_2.rtf Lion.rtf Chameleon.rtf)

animal_len=${#animals[@]}

function generatePath {
	rand=$((1 + RANDOM % 3))
	genpath=${locations[$rand]}
	
}




for animal in ${animals[@]}; do
	
	if [ -e "$animal" ] 
	then 
	echo "Thanks for finding $animal!"
	count=$((count+1))
	else
		echo "You are missing $animal!! Please! The show cannot continue without $animal. Keep searching."
		generatePath
		if [ "$count" -eq 8 ]
		then 
		cd "../$genpath"
		echo "The chameleon has revealed himself and scurried off into another room! Track it down!"
		touch Chameleon.rtf
		fi
	exit
	fi		
done


if [ "$count" -eq "$animal_len" ]
	then
	echo "I have to thank you for getting every member of the circus back together!"
	echo "Just in time for the show!!"
	echo "Use touch your_file to create a file with your name and chosen star of the show for your instructor to see. You can use Vim to edit the file by typing Vim your_file. You will then have to put Vim into 'insert mode' by pressing I. You can save what you've typed by typing ESC followed by 'wq'" 
fi