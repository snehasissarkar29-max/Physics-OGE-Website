import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0b0f19] text-white flex items-center justify-center p-6 text-center">
          <div className="max-w-md p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl space-y-4">
            <h2 className="text-xl font-bold text-cyan-400">Произошла ошибка при загрузке</h2>
            <p className="text-sm text-slate-300">
              {this.state.error?.message || 'Пожалуйста, обновите страницу.'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 rounded-xl font-bold text-xs bg-cyan-500 text-slate-950 hover:bg-cyan-400 cursor-pointer"
            >
              Перезагрузить страницу
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
