import type {Arguments, CommandBuilder, CommandModule} from 'yargs';

// This is a generified version of a command structure, rename as you see fit...

// For example, a "bind" command would have IBindArguments and a bindBuilder with a bindCommand: CommandModule, etc.

// To run it as a test, complile the TS and run "./build/cli.js command <anything>"

interface ICommandArguments extends Arguments {
  arg: string
}

const commandBuilder: CommandBuilder<ICommandArguments, ICommandArguments> = (yargs) =>
  yargs.positional(
    'arg', {
      type: 'string',
      demandOption: true
  })


const commandCommand: CommandModule<ICommandArguments, ICommandArguments> = {
  handler: async (argv: ICommandArguments) => {
    console.log(argv)
  },
  describe: 'A simple command',
  builder: commandBuilder,
  command: 'command <arg>'
}

export = commandCommand;