import {Command} from './command.interface.js';
import {TSVFileReader} from '../../shared/libs/file-reader/tsv-file-reader.js';

export class ImportCommand implements Command {
  public getName(): string {
    return '--import';
  }

  public execute(...parameters: string[]): void {
    const [filepath] = parameters;
    const fileReader = new TSVFileReader(filepath.trim());

    try {
      fileReader.read();
      console.log(fileReader.toArray());
    } catch (err) {

      if (!(err instanceof Error)) {
        throw err;
      }

      console.error(`Can't import data from file with path: ${filepath}`);
      console.error(`Details: ${err.message}`);
    }
  }
}
