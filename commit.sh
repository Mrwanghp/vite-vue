	
	read -p "请输入提交备注:  " envStr
    echo "------------------当前输入备注为: $envStr-------------------"
    # NOW_DATE_B=$(date +"%Y-%m-%d-%H-%M-%S")
    git add .
    git commit -m $envStr
    git pull
    git push
 #    NOW_DATE_B=$(date +"%Y-%m-%d-%H-%M-%S")
 #    FILE_NAME='小程序UNI__4DA9503_'$NOW_DATE_B

	# npm run build:$envStr	cd F:/Ouyeel-cli/


 #    cd F:/Ouyeel-cli/dist/build/app-plus


 #    zip -r __UNI__4DA9503.wgt  *

 #    # cp __UNI__4DA9503.wgt  C:/Users/dell/Desktop/wgt

 #    # rm -rf ../app-plus
    

 #    cd C:/Users/dell/Desktop/wgt

 #    mkdir $FILE_NAME

 #    mv F:/Ouyeel-cli/dist/build/app-plus/__UNI__4DA9503.wgt  $FILE_NAME
