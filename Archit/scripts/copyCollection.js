db.collectionFrom.aggregate([
    {
      $out: collectionTo
    }
  ])