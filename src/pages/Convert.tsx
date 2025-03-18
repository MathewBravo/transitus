import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const conversionOptions = [
  {
    title: 'One-to-One',
    description: 'Convert a single file into a single file of another format. (e.g., JSON → CSV)',
    buttonRoute: '/convert/one-to-one',
  },
  {
    title: 'One-to-Many',
    description: 'Split one file into multiple files. (e.g., CSV → multiple JSONs or GeoJSON tiles)',
    buttonRoute: '/convert/one-to-many',
  },
  {
    title: 'Many-to-One',
    description: 'Merge multiple files into a single file. (e.g., multiple CSVs → single Parquet)',
    buttonRoute: '/convert/many-to-one',
  },
  {
    title: 'File to Database',
    description: 'Load a file directly into a Postgres database table. (e.g., CSV → Postgres Table)',
    buttonRoute: '/convert/file-to-db',
  },
  {
    title: 'Database to File',
    description: 'Export a Postgres table into a file format. (e.g., Postgres → GeoJSON, CSV, or Parquet)',
    buttonRoute: '/convert/db-to-file',
  },
  {
    title: 'Database to Database',
    description: 'Copy or migrate a table between databases or schemas. (e.g., Postgres → SQLite)',
    buttonRoute: '/convert/db-to-db',
  },
  {
    title: 'File Format Inspection / Validation',
    description: 'Analyze file structure and data quality before conversion.',
    buttonRoute: '/inspect/file-format',
  },
  {
    title: 'Batch Conversions (Pipeline Mode)',
    description: 'Queue multiple conversion tasks to run sequentially. (e.g., Merge → Convert → Load to DB)',
    buttonRoute: '/convert/batch',
  },
  {
    title: 'File Sampling / Subset Export',
    description: 'Extract a smaller sample or subset from a larger dataset for testing.',
    buttonRoute: '/sample/file',
  },
  {
    title: 'File Streaming Conversion (for large files)',
    description: 'Convert files by streaming them to handle large datasets efficiently.',
    buttonRoute: '/convert/streaming',
  },
  {
    title: 'Data Enrichment Mode',
    description: 'Enhance data during conversion (e.g., create geometry columns from lat/lon).',
    buttonRoute: '/enrich/data',
  },
];

function ConvertMenu() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center bg-[#0f0618] overflow-hidden p-8">
      <div className="text-white text-5xl font-bold mb-12">Conversion Options</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {conversionOptions.map((option) => (
          <div
            key={option.title}
            className="cursor-pointer"
            onClick={() => navigate(option.buttonRoute)}
          >
            <Card className="w-64 h-40 bg-[#1a0d2e] text-white flex flex-col justify-between">
              <CardHeader>
                <CardTitle>{option.title}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent>
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ConvertMenu;
