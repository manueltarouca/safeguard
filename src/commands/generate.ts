import {Command, Flags} from '@oclif/core'
import crypto = require('crypto');

export default class Generate extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Generate)

    const message = 'teste';
    const keys = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });
    const encyptedData = crypto.publicEncrypt(
      {
        key: keys.publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256'
      },
      Buffer.from(message)
    );
    this.log(`enc data: ${encyptedData.toString('base64')}`)
    const decryptedData = crypto.privateDecrypt(
      {
        key: keys.privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256'
      },
      encyptedData
    )
    this.log(`dec data: ${decryptedData.toString('utf8')}`)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /home/mt/code/safeguard/src/commands/generate.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
