# AI Assistant for VS Code

AI Assistant is a Visual Studio Code extension that provides AI-powered code suggestions to enhance your coding experience.

## Features

- AI-powered code completion
- On-demand code suggestions
- Customizable API integration

## Requirements

- Visual Studio Code v1.75.0 or higher
- An API key for the AI service (e.g., OpenAI, Claude)

## Installation

1. Download the `.vsix` file from the [latest release](https://github.com/aliumairdev/vscode-claude-ai-assistant).
2. Open VS Code and navigate to the Extensions view.
3. Click on the '...' menu in the top-right corner of the Extensions view.
4. Select 'Install from VSIX...' and choose the downloaded `.vsix` file.

## Configuration

Before using the extension, you need to configure your API key and endpoint:

1. Open VS Code settings (File > Preferences > Settings).
2. Search for "AI Assistant" in the settings search bar.
3. Enter your API key in the "Api Key" field.
4. (Optional) If you're using a different AI service, update the "Api Url" field.

## Usage

### Getting AI Suggestions

1. Place your cursor where you want a suggestion.
2. Open the Command Palette (Ctrl+Shift+P / Cmd+Shift+P).
3. Type "Get AI Suggestion" and select the command.

### Inline Completion

As you type, the AI Assistant will automatically offer inline suggestions.

## Extension Settings

This extension contributes the following settings:

- `ai-assistant.apiKey`: API Key for the AI service
- `ai-assistant.apiUrl`: URL for the AI service API

## Known Issues

[List any known issues or limitations here]

## Contributing

We welcome contributions to the AI Assistant extension! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to [AI Service Provider] for their powerful API
- Inspired by GitHub Copilot and other AI coding assistants

## Contact

Your Name - [@a_aliumair](https://twitter.com/a_aliumair) - aliumair.dev@gmail.com

Project Link: [https://github.com/aliumairdev/vscode-claude-ai-assistant](https://github.com/aliumairdev/vscode-claude-ai-assistant)
