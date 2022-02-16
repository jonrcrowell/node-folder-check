const { opendir } = require('fs/promises')

const lookForMe = 'E://temp'

async function folderExists(folderToCheck) {
  try {
    await opendir(folderToCheck)
    console.log('Yay! The folder exists. Continue as planned.')
  } catch (err) {
    console.error(
      err.errno === -4058 ? `Error! ${err.path} does not exist!` : err,
    )
  }
}

folderExists(lookForMe)
