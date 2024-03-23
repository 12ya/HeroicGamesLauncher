import { Runner } from 'common/types'
import fallbackImage from 'frontend/assets/heroic_card.jpg'

export function getImageFormatting(cover: string, runner: Runner) {
  const imageBase = cover
  if (imageBase === 'fallback' || !cover) {
    return fallbackImage
  }
  if (runner === 'legendary') {
    return `${imageBase}?h=400&resize=1&w=300`
  } else {
    return imageBase
  }
}

export function getCardStatus(
  status: string | undefined,
  isInstalled: boolean,
  layout: string
) {
  const isInstalling =
    status === 'installing' || status === 'updating' || status === 'extracting'
  const isUpdating = status === 'updating'
  const isReparing = status === 'repairing'
  const isMoving = status === 'moving'
  const isPlaying = status === 'playing'
  const isQueued = status === 'queued'
  const isUninstalling = status === 'uninstalling'
  const notAvailable = status === 'notAvailable'
  const syncingSaves = status === 'syncing-saves'
  const isLaunching = status === 'launching'
  const isInstallingWinetricksPackages = status === 'winetricks'
  const isInstallingRedist = status === 'redist'

  const haveStatus =
    isMoving ||
    isReparing ||
    isInstalling ||
    isUpdating ||
    isQueued ||
    isUninstalling ||
    notAvailable ||
    isPlaying ||
    syncingSaves ||
    isLaunching ||
    isInstallingWinetricksPackages ||
    isInstallingRedist ||
    (isInstalled && layout !== 'grid')
  return {
    isInstalling,
    isUninstalling,
    isQueued,
    isPlaying,
    notAvailable,
    isUpdating,
    isLaunching,
    isInstallingWinetricksPackages,
    isInstallingRedist,
    haveStatus
  }
}
