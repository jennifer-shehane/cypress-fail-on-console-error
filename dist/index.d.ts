import * as sinon from 'sinon';
import { Config } from './types/Config';
import { ConsoleType } from './types/ConsoleType';
export default function failOnConsoleError(config?: Config): void;
export declare const validateConfig: (config: Config) => void;
export declare const createConfig: (config: Config) => Config;
export declare const createSpies: (config: Config, console: Console) => Map<ConsoleType, sinon.SinonSpy>;
export declare const resetSpies: (spies: Map<ConsoleType, sinon.SinonSpy>) => Map<ConsoleType, sinon.SinonSpy>;
export declare const someSpyCalled: (spies: Map<ConsoleType, sinon.SinonSpy>) => boolean;
export declare const getIncludedSpy: (spies: Map<ConsoleType, sinon.SinonSpy>, config: Config) => sinon.SinonSpy | undefined;
export declare const isExludeMessage: (spy: sinon.SinonSpy, config: Config) => boolean;
