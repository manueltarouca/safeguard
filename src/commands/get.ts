import {Command, Flags} from '@oclif/core'
import { DATA } from '../models/database-model'

export default class Get extends Command {
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

  static args = [{name: 'entry', required: true}]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Get)

    const entry = DATA.entries.find( entry => entry.identifier.includes(args.entry));
    if (entry) {
      this.log(`password retrieved: ${entry?.password}`)
      // this.exit(0)
    } else {
      this.log(`entry not found for identifier [${args.entry}]`)
    }
  }
}
