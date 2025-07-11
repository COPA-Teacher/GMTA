#!/bin/sh
# Taken from Husky v8+ default
# Ensures Husky hooks are only run inside a Git repo

if [ -z "$husky_skip_init" ]; then
  debug () {
    [ "$HUSKY_DEBUG" = "1" ] && echo "husky (debug) - $1"
  }

  readonly hook_name="$(basename "$0")"
  debug "starting $hook_name..."

  if [ -z "$GIT_DIR" ]; then
    readonly git_dir="$(git rev-parse --git-dir 2>/dev/null)"
  else
    readonly git_dir="$GIT_DIR"
  fi

  if [ -f "$git_dir/husky.sh" ]; then
    debug "source $git_dir/husky.sh"
    . "$git_dir/husky.sh"
  elif [ -f ~/.huskyrc ]; then
    debug "source ~/.huskyrc"
    . ~/.huskyrc
  fi
fi
