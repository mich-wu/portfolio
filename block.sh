#!/bin/bash

# ask for the new block name

echo "Enter the new block name:"

read blockName

# define source file
 
srcFile="src/components/templateY/templateY.js"

# create new directory based on the component name 

newDir="src/components/ModularContent/Blocks" 

# copy the source file to the new directory with the new block name

cp "$srcFile" "$newDir/$blockName.js"

# replace content in the copied file

BlockName="$(tr a-z A-Z <<< ${blockName:0:1})${blockName:1}"

 
sed -i '' "s/templateY/$blockName/g" "$newDir/$blockName.js"

sed -i '' "s/TemplateY/$BlockName/g" "$newDir/$blockName.js"

 
# Add the export statement to the existing index.jsx

echo "export { default as $blockName } from './Blocks/$blockName';" >> "src/components/ModularContent/index.js"

echo "New block $blockName created successfully."