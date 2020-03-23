'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function activate(context) {
    let disposable;
    disposable = vscode.commands.registerCommand('extension.kundokuRe', function () {
        insertText('㆑');
    });
    disposable = vscode.commands.registerCommand('extension.kundoku1', function () {
        insertText('㆒');
    });
    disposable = vscode.commands.registerCommand('extension.kundoku2', function () {
        insertText('㆓');
    });
    disposable = vscode.commands.registerCommand('extension.kundoku3', function () {
        insertText('㆔');
    });
    disposable = vscode.commands.registerCommand('extension.kundoku4', function () {
        insertText('㆕');
    });
    disposable = vscode.commands.registerCommand('extension.kundokuJou', function () {
        insertText('㆖');
    });
    disposable = vscode.commands.registerCommand('extension.kundokuChu', function () {
        insertText('㆗');
    });
    disposable = vscode.commands.registerCommand('extension.kundokuGe', function () {
        insertText('㆘');
    });
    disposable = vscode.commands.registerCommand('extension.kundokuKou', function () {
        insertText('㆙');
    });
    disposable = vscode.commands.registerCommand('extension.kundokuOtsu', function () {
        insertText('㆚');
    });
    disposable = vscode.commands.registerCommand('extension.kundokuHei', function () {
        insertText('㆛');
    });
    disposable = vscode.commands.registerCommand('extension.kundokuTei', function () {
        insertText('㆜');
    });
    disposable = vscode.commands.registerCommand('extension.kundokuTen', function () {
        insertText('㆝');
    });
    disposable = vscode.commands.registerCommand('extension.kundokuChi', function () {
        insertText('㆞');
    });
    disposable = vscode.commands.registerCommand('extension.kundokuJin', function () {
        insertText('㆟');
    });
    disposable = vscode.commands.registerCommand('extension.kundokuTateten', function () {
        insertText('㆐');
    });
    context.subscriptions.push(disposable);
    let timeout = undefined;
    const kanbunDecoration = vscode.window.createTextEditorDecorationType({
        backgroundColor: { id: 'extension.kanbunHighlight' }
    });
    let activeEditor = vscode.window.activeTextEditor;
    function updateDecorations() {
        if (!activeEditor) {
            return;
        }
        const regEx = /[\u3190-\u319f]+/g;
        const text = activeEditor.document.getText();
        const smallNumbers = [];
        let match;
        while (match = regEx.exec(text)) {
            const startPos = activeEditor.document.positionAt(match.index);
            const endPos = activeEditor.document.positionAt(match.index + match[0].length);
            const decoration = { range: new vscode.Range(startPos, endPos), hoverMessage: `漢文訓読 \`${match[0]}\`` };
            smallNumbers.push(decoration);
        }
        activeEditor.setDecorations(kanbunDecoration, smallNumbers);
    }
    function triggerUpdateDecorations() {
        if (timeout) {
            clearTimeout(timeout);
            timeout = undefined;
        }
        timeout = setTimeout(updateDecorations, 200);
    }
    if (activeEditor) {
        triggerUpdateDecorations();
    }
    vscode.window.onDidChangeActiveTextEditor(editor => {
        activeEditor = editor;
        if (editor) {
            triggerUpdateDecorations();
        }
    }, null, context.subscriptions);
    vscode.workspace.onDidChangeTextDocument(event => {
        if (activeEditor && event.document === activeEditor.document) {
            triggerUpdateDecorations();
        }
    }, null, context.subscriptions);
}
exports.activate = activate;
function insertText(text) {
    let editor = vscode.window.activeTextEditor;
    if (editor) {
        let selection = editor.selection;
        editor.edit(editBuilder => {
            editBuilder.insert(selection.start, text);
        });
    }
}
//# sourceMappingURL=extension.js.map