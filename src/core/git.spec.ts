import * as fs from 'fs';
import * as path from 'path';
import { expect } from 'chai';

describe('git', () => {

    it('No embedded Git, no GPL', () => {
        const node_modules = path.join(__dirname, '..', '..', 'node_modules');
        expect(fs.existsSync(node_modules)).to.be.true;
        expect(fs.existsSync(path.join(node_modules, 'dugite'))).to.be.false;
        expect(fs.existsSync(path.join(node_modules, 'dugite-no-gpl'))).to.be.true;
        expect(fs.existsSync(path.join(node_modules, 'dugite-no-gpl', 'git'))).to.be.false;
    });

});
