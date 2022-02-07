// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
 export function removeDuplicates(playlist) {
    const setlist = new Set()
    for (let element of playlist) {
      setlist.add(element)  
    }
    return Array.from(setlist)
  }
  
  /**
   * Checks whether a playlist includes a track.
   *
   * @param {string[]} playlist
   * @param {string} track
   * @returns {boolean} whether the track is in the playlist
   */
  export function hasTrack(playlist, track) {
    const setlist = new Set()
    for (let element of playlist) {
      setlist.add(element)  
    }
    return setlist.has(track)
  }
  
  /**
   * Adds a track to a playlist.
   *
   * @param {string[]} playlist
   * @param {string} track
   * @returns {string[]} new playlist
   */
  export function addTrack(playlist, track) {
    const set = new Set(playlist)
    set.add(track);
    return Array.from(set)
  }
  
  /**
   * Deletes a track from a playlist.
   *
   * @param {string[]} playlist
   * @param {string} track
   * @returns {string[]} new playlist
   */
  export function deleteTrack(playlist, track) {
    const set = new Set(playlist)
    set.delete(track);
    return Array.from(set)
  }
  
  /**
   * Lists the unique artists in a playlist.
   *
   * @param {string[]} playlist
   * @returns {string[]} list of artists
   */
  export function listArtists(playlist) {
    const setlist = new Set()
    let words = ""
    for (let element of playlist) {
      words = element.split(' - ') 
      setlist.add(words[1])
    }
    return Array.from(setlist)
  }
  