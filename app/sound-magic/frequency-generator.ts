'use client'

/**
 * This is taken from my (Edmund Bates) github repository for frequency generation.
 * https://github.com/DigitalDaring/PianoTools/blob/main/app/noise-makers/frequency-generator.ts
 */

export type Note = {
    hz: number,
    name: string,
    line?: number
};

export type NoteList = {
    c: Note,
    cS: Note,
    d: Note,
    dS: Note,
    e: Note,
    f: Note,
    fS: Note,
    g: Note,
    gS: Note,
    a: Note,
    aS: Note,
    bF: Note,
    b: Note
};

export const notes = {
    c:  { hz: 261.626, name: 'C' },
    cS: { hz: 277.183, name: 'C#' },
    d:  { hz: 293.665, name: 'D' },
    dS: { hz: 311.127, name: 'D#' },
    e:  { hz: 329.628, name: 'E' },
    f:  { hz: 349.228, name: 'F' },
    fS: { hz: 369.994, name: 'F#' },
    g:  { hz: 391.995, name: 'G' },
    gS: { hz: 415.305, name: 'G#' },
    a:  { hz: 440.000, name: 'A' },
    aS: { hz: 466.164, name: 'A#' },
    bF: { hz: 466.164, name: 'Bb' },
    b:  { hz: 493.883, name: 'B' },
} as NoteList;

export const notesArray =  [notes.c, notes.cS, notes.d, notes.dS, notes.e, notes.f, notes.fS, notes.g, notes.gS, notes.a, notes.aS, notes.b];

export const playFrequency = (f: number, audioContext: AudioContext, callback: () => void) => {
    const gainNode = audioContext.createGain();
    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + 2);
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.connect(gainNode);
    oscillator.frequency.value = f;
    gainNode.connect(audioContext.destination);
    oscillator.start(0);
    callback();
}

export const clearNowPlaying = (audioContext: AudioContext) => {
    const gainNode = audioContext.createGain();
    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime);
    console.log('state: ', audioContext.state);
}