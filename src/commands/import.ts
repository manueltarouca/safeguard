import {Command, Flags} from '@oclif/core';
import fs = require('fs');

export default class Import extends Command {
  static description = 'import private key'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ];

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Import)

    const name = flags.name ?? 'world'
    const file = await fs.readFileSync(args.file,'utf-8');
    this.log(file);
    this.log(`hello ${name} from /home/mt/code/safeguard/src/commands/import.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
