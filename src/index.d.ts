import EventEmitter from "events";

export type Metadata = {
	currentTime: number,
	duration: number,
	title: string,
	artist: string,
	album: string,
	id: string | number,
	state: States,
	albumArt: unknown,
};

export type States = 'playing' | 'paused' | 'stopped';

declare module 'electron-media-service' {
	export default class MediaService extends EventEmitter {
		on(event: "play", listener: VoidFunction): this;
		on(event: "pause", listener: VoidFunction): this;
		on(event: "playPause", listener: VoidFunction): this;
		on(event: "next", listener: VoidFunction): this;
		on(event: "previous", listener: VoidFunction): this;
		on(event: "seek", listener: (ms: number) => void): this;
		startService(): void;
		stopService(): void;
		isStarted(): boolean;
		setMetaData(newMetadata: Metadata): void;
	}
}