const { opendir } = require('fs/promises')

const lookForMe = 'E://tempx'

async function CheckForFolder(folderToCheck) {
  try {
    const dir = await opendir(folderToCheck)
    console.log('Yay! The folder exists. Continue as planned.')
  } catch (err) {
    console.error(
      err.errno === -4058 ? `Error! ${err.path} does not exist!` : err,
    )
  }
}

CheckForFolder(lookForMe)
