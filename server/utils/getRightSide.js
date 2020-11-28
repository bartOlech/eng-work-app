exports.getUsers = (name, relationType) => {
  return  `MATCH (p:Person) 
  WITH COLLECT(p) AS persons
  UNWIND persons AS p1
  UNWIND persons AS p2
  WITH p1,p2
  WHERE id(p1) > id(p2)
  MATCH (p1 {name: '${name}'})-[r1:RATE]->(w:${relationType})<-[r2:RATE]-(p2)
  RETURN p1.name AS p1Name,
  p2.name AS p2Name,
  COUNT(DISTINCT w) AS sharedWordCount,
  COLLECT(w.name) AS sharedWords,
  COLLECT(r1.rate) AS user1Rate,
  COLLECT(r2.rate) AS user2Rate`
}