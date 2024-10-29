# List of branches you want to archive
branches=("v3-portfolio-vercel" "main-vercel" "v1_portfolio" "v2_portfolio")

# Loop through each branch to rename, push with archived prefix, and delete the old remote branch
for branch in "${branches[@]}"; do
  # Rename the branch locally to archived/<branch-name>
  git branch -m "$branch" "archived/$branch"

  # Push the archived branch to the remote
  git push origin "archived/$branch"

  # Delete the old branch from the remote
  git push origin --delete "$branch"

  # Optionally delete the old local branch reference
  git branch -d "$branch"
done
