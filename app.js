const { opendir } = require('fs/promises')

const lookForMe = 'E://temp'

async function CheckForFolder(folderToCheck) {
  try {
    const dir = await opendir(folderToCheck)
    console.log('Yay! The folder exists. Continue as planned.')
  } catch (err) {
    console.error(`Error! ${err.path} does not exist!`)
  }
}

CheckForFolder(lookForMe)
