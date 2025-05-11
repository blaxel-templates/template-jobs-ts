# Blaxel TypeScript Job Template

<p align="center">
  <img src="https://blaxel.ai/logo.png" alt="Blaxel"/>
</p>


A template implementation of a TypeScript job using Blaxel. This job demonstrates a simple hello world job.

## Features

- Easy deployment of a job with Blaxel platform
- Built on Blaxel for efficient job orchestration


## Prerequisites

- **Node.js:** v18 or later.
- **[Blaxel CLI](https://docs.blaxel.ai/Get-started):** Ensure you have the Blaxel CLI installed. If not, install it globally:
  ```bash
  curl -fsSL https://raw.githubusercontent.com/blaxel-ai/toolkit/main/install.sh | BINDIR=$HOME/.local/bin sh
  ```
- **Blaxel login:** Login to Blaxel platform
  ```bash
  bl login YOUR-WORKSPACE
  ```

## Installation

**Clone the repository and install dependencies:**

```bash
git clone https://github.com/blaxel-ai/template-job-ts.git
cd template-job-ts
pnpm install
```

## Running the Server Locally

Start the job locally

```bash
# Run the job with a sample batch file
bl run job jobs-ts --local --file batches/sample-batch.json
# Or directly with --data argument
bl run job jobs-ts --local --data '{"tasks": [{"name": "John"}]}'
# Or without blaxel cli
pnpm start --name John
```

## Deploying to Blaxel

When you are ready to deploy your job:

```bash
bl deploy
```

## Running the job in production

```bash
# Run the job with a sample batch file
bl run job jobs-ts --file batches/sample-batch.json
# Or directly with --data argument
bl run job jobs-ts --data '{"tasks": [{"name": "John"}]}'
```

## Project Structure

- **src/index.ts** - Job entry point
- **blaxel.toml** - Blaxel deployment configuration
- **batches/** - Sample batch files

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
