exports.getUsers = (name, relationType) => {
  return  `MATCH (p:Person) 
  WITH COLLECT(p) AS persons
  UNWIND persons AS p1
  UNWIND persons AS p2
  WITH p1,p2
  WHERE id(p1) > id(p2)
  MATCH (p1 {name: '${name}'})-[:RATE]->(w:${relationType})<-[:RATE]-(p2)
  RETURN p1.name AS p1Name,
  p2.name AS p2Name,
  COUNT(DISTINCT w) AS sharedWordCount,
  COLLECT(DISTINCT w.string) AS sharedWords`
}